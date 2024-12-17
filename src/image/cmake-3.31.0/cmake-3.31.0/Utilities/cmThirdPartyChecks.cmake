# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

# Hard-code third-party try_compile checks where we know the answer.

# Results for builds targeting all supported platforms.
set(HAVE_ASSERT_H 1)
set(HAVE__CrtSetReportMode 0) # unused anyway
set(HAVE_CTYPE_H 1)
set(HAVE_LOCALE_H 1)
set(HAVE_MEMMOVE 1)
set(HAVE_SETLOCALE 1)
set(HAVE_SNPRINTF 1)
set(HAVE_STDDEF_H 1)
set(HAVE_STDIO_H 1)
set(HAVE_STDLIB_H 1)
set(HAVE_STRCHR 1)
set(HAVE_STRDUP 1)
set(HAVE_STRFTIME 1)
set(HAVE_STRING_H 1)
set(HAVE_STRRCHR 1)
set(HAVE_WCHAR_H 1)

# Used by TEST_BIG_ENDIAN.
set(CMAKE_SIZEOF_UNSIGNED_SHORT 2)
set(HAVE_CMAKE_SIZEOF_UNSIGNED_SHORT 1)

if(WIN32)
  # Results for builds targeting Windows platforms.
  # This covers both MSVC-ABI and GNU-ABI toolchains.

  set(HAVE_ALARM 0)
  set(HAVE_ARC4RANDOM 0)
  set(HAVE_ARC4RANDOM_BUF 0)
  set(HAVE_ARPA_TFTP_H 0)
  set(HAVE_BSWAP_16 0)
  set(HAVE_BSWAP_32 0)
  set(HAVE_BSWAP_64 0)
  set(HAVE_BUILTIN_AVAILABLE 0)
  set(HAVE_BYTESWAP_H 0)
  set(HAVE_CHFLAGS 0)
  set(HAVE_CHOWN 0)
  set(HAVE_CHROOT 0)
  set(HAVE_COPYFILE_H 0)
  set(HAVE_CRYPTO_H 0)
  set(HAVE_CTIME_R 0)
  set(HAVE_CTIME_S 1)
  set(HAVE_CYGWIN_CONV_PATH 0)
  set(HAVE_DES_H 0)
  set(HAVE_DIRECT_H 1)
  set(HAVE_DIRFD 0)
  set(HAVE_DLFCN_H 0)
  set(HAVE_D_MD_ORDER 0)
  set(HAVE_EFTYPE 0)
  set(HAVE_EILSEQ 1)
  set(HAVE_ERR_H 0)
  set(HAVE_ERRNO_H 1)
  set(HAVE_EVENTFD 0)
  set(HAVE_EXT2FS_EXT2_FS_H 0)
  set(HAVE_FCHDIR 0)
  set(HAVE_FCHFLAGS 0)
  set(HAVE_FCHMOD 0)
  set(HAVE_FCHOWN 0)
  set(HAVE_FCNTL 0)
  set(HAVE_FCNTL_H 1)
  set(HAVE_FCNTL_O_NONBLOCK 0)
  set(HAVE_FDOPENDIR 0)
  set(HAVE_FNMATCH 0)
  set(HAVE_FNMATCH_H 0)
  set(HAVE_FORK 0)
  set(HAVE_FREEADDRINFO 1)
  set(HAVE_FREEIFADDRS 0)
  set(HAVE__FSEEKI64 1)
  set(HAVE_FSETXATTR 0)
  set(HAVE_FSTAT 1)
  set(HAVE_FSTATAT 0)
  set(HAVE_FSTATFS 0)
  set(HAVE_FSTATVFS 0)
  set(HAVE_FTRUNCATE 0)
  set(HAVE_FUTIMENS 0)
  set(HAVE_FUTIMES 0)
  set(HAVE_FUTIMESAT 0)
  set(HAVE_GETADDRINFO 1)
  set(HAVE_GETEUID 0)
  set(HAVE_GETGRGID_R 0)
  set(HAVE_GETGRNAM_R 0)
  set(HAVE_GETHOSTBYNAME 1)
  set(HAVE_GETLINE 0)
  set(HAVE_GETPAGESIZE 0)
  set(HAVE_GETPEERNAME 1)
  set(HAVE_GETPID 1)
  set(HAVE_GETPPID 0)
  set(HAVE_GETPROTOBYNAME 1)
  set(HAVE_GETPWNAM_R 0)
  set(HAVE_GETPWUID_R 0)
  set(HAVE_GETRANDOM 0)
  set(HAVE_GETRLIMIT 0)
  set(HAVE_GETSOCKNAME 1)
  set(HAVE_GETVFSBYNAME 0)
  set(HAVE_GLIBC_STRERROR_R 0)
  set(HAVE_GMTIME_R 0)
  set(HAVE_GMTIME_S 1)
  set(HAVE_GRP_H 0)
  set(HAVE_IDN2_H 0)
  set(HAVE_IFADDRS_H 0)
  set(HAVE_IF_NAMETOINDEX 0)
  set(HAVE_INET_NTOP 1)
  set(HAVE_INTTYPES_H 1)
  set(HAVE_IOCTL 0)
  set(HAVE_IOCTL_FIONBIO 0)
  set(HAVE_IOCTL_SIOCGIFADDR 0)
  set(HAVE_IOCTLSOCKET 1)
  set(HAVE_IOCTLSOCKET_CAMEL 0)
  set(HAVE_IOCTLSOCKET_CAMEL_FIONBIO 1)
  set(HAVE_IOCTLSOCKET_FIONBIO 1)
  set(HAVE_IO_H 1)
  set(HAVE_KRB_H 0)
  set(HAVE_LANGINFO_H 0)
  set(HAVE_LCHFLAGS 0)
  set(HAVE_LCHMOD 0)
  set(HAVE_LCHOWN 0)
  set(HAVE_LIBIDN2 0)
  set(HAVE_LIBNETWORK 0)
  set(HAVE_LIBWINMM 1)
  set(HAVE_LIBWS2_32 1)
  set(HAVE_LIMITS_H 1)
  set(HAVE_LINK 0)
  set(HAVE_LINKAT 0)
  set(HAVE_LINUX_FIEMAP_H 0)
  set(HAVE_LINUX_FS_H 0)
  set(HAVE_LINUX_MAGIC_H 0)
  set(HAVE_LINUX_TYPES_H 0)
  set(HAVE_LOCALTIME_R 0)
  set(HAVE_LOCALTIME_S 0)
  set(HAVE_LSTAT 0)
  set(HAVE_LUTIMES 0)
  set(HAVE_MACH_ABSOLUTE_TIME 0)
  set(HAVE_MBRTOWC 1)
  set(HAVE_MEMBERSHIP_H 0)
  set(HAVE_MEMORY_H 1)
  set(HAVE_MKDIR 1)
  set(HAVE_MKFIFO 0)
  set(HAVE__MKGMTIME 1)
  set(HAVE_MKNOD 0)
  set(HAVE_MMAP 0)
  set(HAVE_MSG_NOSIGNAL 0)
  set(HAVE_NETINET_TCP_H 0)
  set(HAVE_NL_LANGINFO 0)
  set(HAVE_OPENAT 0)
  set(HAVE_PATHS_H 0)
  set(HAVE_PEM_H 0)
  set(HAVE_PIPE 0)
  set(HAVE_POLL 0)
  set(HAVE_POLL_FINE 0)
  set(HAVE_POLL_H 0)
  set(HAVE_POSIX_SPAWNP 0)
  set(HAVE_POSIX_STRERROR_R 0)
  set(HAVE_PROCESS_H 1)
  set(HAVE_PWD_H 0)
  set(HAVE_READDIR_R 0)
  set(HAVE_READLINK 0)
  set(HAVE_READLINKAT 0)
  set(HAVE_READPASSPHRASE 0)
  set(HAVE_READPASSPHRASE_H 0)
  set(HAVE_REGEX_H 0)
  set(HAVE_RSA_H 0)
  set(HAVE_SELECT 0)
  set(HAVE_SENDMSG 0)
  set(HAVE_SETENV 0)
  set(HAVE_SETMODE 1)
  set(HAVE_SETRLIMIT 0)
  set(HAVE_SETSOCKOPT 1)
  set(HAVE_SETSOCKOPT_SO_NONBLOCK 0)
  set(HAVE_SIGACTION 0)
  set(HAVE_SIG_ATOMIC_T_NOT_VOLATILE 1)
  set(HAVE_SIGINTERRUPT 0)
  set(HAVE_SIGNAL_H 1)
  set(HAVE_SIZEOF_ADDRESS_FAMILY 0)
  set(HAVE_SIZEOF_SA_FAMILY_T 0)
  set(HAVE_SIZEOF_SUSECONDS_T 0)
  set(HAVE_SOCKETPAIR 0)
  set(HAVE_SOCKADDR_IN6_SIN6_SCOPE_ID 0)
  set(HAVE_SPAWN_H 0)
  set(HAVE_SSL_H 0)
  set(HAVE_STATFS 0)
  set(HAVE_STATVFS 0)
  set(HAVE_STDARG_H 1)
  set(HAVE_STDBOOL_H 1)
  set(HAVE_STDINT_H 1)
  set(HAVE_STRERROR 1)
  set(HAVE_STRERROR_R 0)
  set(HAVE_STRNCMPI 0)
  set(HAVE_STRNCPY_S 1)
  set(HAVE_STRNLEN 1)
  set(HAVE_STROPTS_H 0)
  set(HAVE__STRTOI64 1)
  set(HAVE_STRTOLL 1)
  set(HAVE_STRUCT_STATFS 0)
  set(HAVE_STRUCT_STATFS_F_NAMEMAX 0)
  set(HAVE_STRUCT_STAT_ST_BIRTHTIME 0)
  set(HAVE_STRUCT_STAT_ST_BIRTHTIMESPEC_TV_NSEC 0)
  set(HAVE_STRUCT_STAT_ST_BLKSIZE 0)
  set(HAVE_STRUCT_STAT_ST_FLAGS 0)
  set(HAVE_STRUCT_STAT_ST_MTIME_N 0)
  set(HAVE_STRUCT_STAT_ST_MTIMESPEC_TV_NSEC 0)
  set(HAVE_STRUCT_STAT_ST_MTIME_USEC 0)
  set(HAVE_STRUCT_STAT_ST_MTIM_TV_NSEC 0)
  set(HAVE_STRUCT_STAT_ST_UMTIME 0)
  set(HAVE_STRUCT_TIMEVAL 1)
  set(HAVE_STRUCT_TM___TM_GMTOFF 0)
  set(HAVE_STRUCT_TM_TM_GMTOFF 0)
  set(HAVE_STRUCT_VFSCONF 0)
  set(HAVE_STRUCT_XVFSCONF 0)
  set(HAVE_SYMLINK 0)
  set(HAVE_SYSCONF 0)
  set(HAVE_SYS_ACL_H 0)
  set(HAVE_SYSCALL_GETRANDOM 0)
  set(HAVE_SYS_EVENTFD_H 0)
  set(HAVE_SYS_EXTATTR_H 0)
  set(HAVE_SYS_FILIO_H 0)
  set(HAVE_SYS_IOCTL_H 0)
  set(HAVE_SYS_MKDEV_H 0)
  set(HAVE_SYS_MOUNT_H 0)
  set(HAVE_SYS_POLL_H 0)
  set(HAVE_SYS_QUEUE_H 0)
  set(HAVE_SYS_RESOURCE_H 0)
  set(HAVE_SYS_RICHACL_H 0)
  set(HAVE_SYS_SELECT_H 0)
  set(HAVE_SYS_STATFS_H 0)
  set(HAVE_SYS_STAT_H 1)
  set(HAVE_SYS_STATVFS_H 0)
  set(HAVE_SYS_SYSCTL_H 0)
  set(HAVE_SYS_SYSMACROS_H 0)
  set(HAVE_SYS_UIO_H 0)
  set(HAVE_SYS_UN_H 0)
  set(HAVE_SYS_UTSNAME_H 0)
  set(HAVE_SYS_VFS_H 0)
  set(HAVE_SYS_WAIT_H 0)
  set(HAVE_SYS_XATTR_H 0)
  set(HAVE_TIMEGM 0)
  set(HAVE_TZSET 1)
  set(HAVE_UNLINKAT 0)
  set(HAVE_USLEEP 0)
  set(HAVE_UTIMENSAT 0)
  set(HAVE_UTIMES 0)
  set(HAVE_VFORK 0)
  set(HAVE_WORKING_EXT2_IOC_GETFLAGS 0)
  set(HAVE_WORKING_FS_IOC_GETFLAGS 0)

  set(HAVE_SIZEOF_CURL_SOCKET_T 1)
  set(SIZEOF_CURL_SOCKET_T 8)

  if(NOT MINGW)
    set(HAVE_STRTOK_R 0)
  endif()

  # Some POSIX headers are available on Windows.
  set(HAVE_SYS_TYPES_H 1)
  set(HAVE_SYS_UTIME_H 1)
  set(HAVE_TIME_H 1)
  set(HAVE_UTIME 1)

  # Wide character APIs are available on Windows.
  set(HAVE_WCRTOMB 1)
  set(HAVE_WCSCMP 1)
  set(HAVE_WCSCPY 1)
  set(HAVE_WCSLEN 1)
  set(HAVE_WCTOMB 1)
  set(HAVE_WCTYPE_H 1)

  # Windows APIs are available on Windows.
  set(HAVE_WINCRYPT_H 1)
  set(HAVE_WINDOWS_H 1)
  set(HAVE_WINIOCTL_H 1)
  set(HAVE_WINSOCK2_H 1)
  set(HAVE_WS2TCPIP_H 1)
  set(USE_WINCRYPT 1) # We do not need to build as a Windows App.

  # UNIX integer id types do not exist on Windows.
  set(HAVE_ID_T 0)
  set(HAVE_GID_T 0)
  set(HAVE_UID_T 0)
  set(ID_T "")
  set(GID_T "")
  set(UID_T "")

  # curl and expat: stdlib.h, stdarg.h, string.h, float.h
  set(STDC_HEADERS 1)

  # UNIX device APIs do not exist on Windows.
  set(MAJOR_IN_MKDEV 0)
  set(MAJOR_IN_SYSMACROS 0)

  # FreeBSD libmd does not exist on Windows.
  set(LIBMD_FOUND 0)

  # libarchive looks for external hash implementations.
  set(ARCHIVE_CRYPTO_MD5_LIBC 0)
  set(ARCHIVE_CRYPTO_MD5_LIBMD 0)
  set(ARCHIVE_CRYPTO_MD5_LIBSYSTEM 0)
  set(ARCHIVE_CRYPTO_MD5_WIN 1)
  set(ARCHIVE_CRYPTO_RMD160_LIBC 0)
  set(ARCHIVE_CRYPTO_RMD160_LIBMD 0)
  set(ARCHIVE_CRYPTO_SHA1_LIBC 0)
  set(ARCHIVE_CRYPTO_SHA1_LIBMD 0)
  set(ARCHIVE_CRYPTO_SHA1_LIBSYSTEM 0)
  set(ARCHIVE_CRYPTO_SHA1_WIN 1)
  set(ARCHIVE_CRYPTO_SHA256_LIBC 0)
  set(ARCHIVE_CRYPTO_SHA256_LIBC2 0)
  set(ARCHIVE_CRYPTO_SHA256_LIBC3 0)
  set(ARCHIVE_CRYPTO_SHA256_LIBMD 0)
  set(ARCHIVE_CRYPTO_SHA256_LIBSYSTEM 0)
  set(ARCHIVE_CRYPTO_SHA256_WIN 0)
  set(ARCHIVE_CRYPTO_SHA384_LIBC 0)
  set(ARCHIVE_CRYPTO_SHA384_LIBC2 0)
  set(ARCHIVE_CRYPTO_SHA384_LIBC3 0)
  set(ARCHIVE_CRYPTO_SHA384_LIBSYSTEM 0)
  set(ARCHIVE_CRYPTO_SHA384_WIN 0)
  set(ARCHIVE_CRYPTO_SHA512_LIBC 0)
  set(ARCHIVE_CRYPTO_SHA512_LIBC2 0)
  set(ARCHIVE_CRYPTO_SHA512_LIBC3 0)
  set(ARCHIVE_CRYPTO_SHA512_LIBMD 0)
  set(ARCHIVE_CRYPTO_SHA512_LIBSYSTEM 0)
  set(ARCHIVE_CRYPTO_SHA512_WIN 0)
endif()
