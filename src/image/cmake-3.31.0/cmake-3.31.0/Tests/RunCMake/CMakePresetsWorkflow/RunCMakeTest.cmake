include(RunCMake)

# Presets do not support legacy VS generator name architecture suffix.
if(RunCMake_GENERATOR MATCHES "^(Visual Studio [0-9]+ [0-9]+) ")
  set(RunCMake_GENERATOR "${CMAKE_MATCH_1}")
endif()

function(run_cmake_workflow_presets name)
  set(RunCMake_TEST_SOURCE_DIR "${RunCMake_BINARY_DIR}/${name}")
  set(RunCMake_TEST_BINARY_DIR "${RunCMake_TEST_SOURCE_DIR}/build")
  set(RunCMake_TEST_COMMAND_WORKING_DIRECTORY "${RunCMake_TEST_SOURCE_DIR}")

  if(NOT RunCMake_TEST_NO_CLEAN)
    file(REMOVE_RECURSE "${RunCMake_TEST_SOURCE_DIR}")
    file(MAKE_DIRECTORY "${RunCMake_TEST_SOURCE_DIR}")
  endif()

  set(RunCMake_TEST_NO_CLEAN TRUE)

  set(CASE_NAME "${name}")
  set(CASE_SOURCE_DIR "${RunCMake_SOURCE_DIR}")
  configure_file("${RunCMake_SOURCE_DIR}/CMakeLists.txt.in" "${RunCMake_TEST_SOURCE_DIR}/CMakeLists.txt" @ONLY)

  if(NOT CMakePresets_FILE)
    set(CMakePresets_FILE "${RunCMake_SOURCE_DIR}/${name}.json.in")
  endif()
  if(EXISTS "${CMakePresets_FILE}")
    configure_file("${CMakePresets_FILE}" "${RunCMake_TEST_SOURCE_DIR}/CMakePresets.json" @ONLY)
  endif()

  if(NOT CMakeUserPresets_FILE)
    set(CMakeUserPresets_FILE "${RunCMake_SOURCE_DIR}/${name}User.json.in")
  endif()
  if(EXISTS "${CMakeUserPresets_FILE}")
    configure_file("${CMakeUserPresets_FILE}" "${RunCMake_TEST_SOURCE_DIR}/CMakeUserPresets.json" @ONLY)
  endif()

  foreach(ASSET ${CMakePresets_ASSETS})
    configure_file("${RunCMake_SOURCE_DIR}/${ASSET}.in" "${RunCMake_TEST_SOURCE_DIR}/${ASSET}" @ONLY)
  endforeach()

  if(EXISTS "${RunCMake_SOURCE_DIR}/${name}-check.cmake")
    set(RunCMake-check-file "${name}-check.cmake")
  else()
    set(RunCMake-check-file "check.cmake")
  endif()

  if(CMakePresets_DIRECT_ARG)
    set(preset_arg "${name}")
  elseif(eq)
    set(eq 0 PARENT_SCOPE)
    set(preset_arg "--preset=${name}")
  else()
    set(eq 1 PARENT_SCOPE)
    set(preset_arg "--preset" "${name}")
  endif()
  run_cmake_command("${name}" "${CMAKE_COMMAND}" "--workflow" ${preset_arg} ${ARGN})
endfunction()

set(CMakePresets_SCHEMA_EXPECTED_RESULT 1)
run_cmake_workflow_presets(UnsupportedVersion)
set(CMakePresets_SCHEMA_EXPECTED_RESULT 0)
run_cmake_workflow_presets(NoWorkflowSteps)
run_cmake_workflow_presets(FirstStepNotConfigure)
run_cmake_workflow_presets(SecondStepConfigure)
run_cmake_workflow_presets(NonexistentStep)
run_cmake_workflow_presets(UnreachableStep)
run_cmake_workflow_presets(WorkflowStepHidden)
run_cmake_workflow_presets(WorkflowStepDisabled)
run_cmake_workflow_presets(WorkflowStepInvalidMacro)
run_cmake_workflow_presets(ConfigureStepMismatch)

set(CMakePresets_FILE "${RunCMake_SOURCE_DIR}/Good.json.in")
set(CMakeUserPresets_FILE "${RunCMake_SOURCE_DIR}/GoodUser.json.in")
set(CMakePresets_ASSETS cpack_staging.cmake)
run_cmake_workflow_presets(Good)
run_cmake_workflow_presets(GoodUser)
run_cmake_workflow_presets(BadExitCode)
unset(CMakePresets_FILE)
unset(CMakeUserPresets_FILE)
unset(CMakePresets_ASSETS)

run_cmake_workflow_presets(ListPresets --list-presets)
run_cmake_workflow_presets(InvalidOption -DINVALID_OPTION)

set(RunCMake_TEST_NO_CLEAN TRUE)
file(REMOVE_RECURSE "${RunCMake_BINARY_DIR}/Fresh")
file(MAKE_DIRECTORY "${RunCMake_BINARY_DIR}/Fresh/build")
file(WRITE "${RunCMake_BINARY_DIR}/Fresh/build/CMakeCache.txt" "FRESH_CONFIGURE:BOOL=OFF\n")
run_cmake_workflow_presets(Fresh --fresh)
unset(RunCMake_TEST_NO_CLEAN)

set(CMakePresets_DIRECT_ARG TRUE)
set(CMakePresets_FILE "${RunCMake_SOURCE_DIR}/MultiplePresets.json.in")
run_cmake_workflow_presets(SinglePresetArg)
run_cmake_workflow_presets(RepeatedPresetArg --preset SinglePresetArg)
unset(CMakePresets_FILE)
unset(CMakePresets_DIRECT_ARG)