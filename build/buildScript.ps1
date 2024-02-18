Param(
    $mode
)

$osNames = @{
    "macOsArm64" = "macos-arm64";
    "winX64" = "windows-x64";
    "linArm64" = "linux-arm64";
    "linX64" = "linux-x64"; 
}
$directories = @{
    "projectRootDirectory" = "./";
    "source" = "./src";
    "Build" = "./build";
    "Debug" = "./build/Debug";
    "Release" = "./build/Release";
}
$directories.Add("sourceData", ($directories.source.toString() + "/data"))
$directories.Add("ReleaseBinaries", ($directories.Release.toString() + "/binaries"))
$directories.Add("MacArm64Binaries", ($directories.ReleaseBinaries.toString() + "/" + $osNames.macOsArm64.toString()))
$directories.Add("MacArm64Data", ($directories.MacArm64Binaries.toString() + "/data"))
$directories.Add("WinX64Binaries", ($directories.ReleaseBinaries.toString() + "/" + $osNames.winX64.toString()))
$directories.Add("WinX64Data", ($directories.WinX64Binaries.toString() + "/data"))
$directories.Add("LinArmBinaries", ($directories.ReleaseBinaries.toString() + "/" + $osNames.linArm64.toString()))
$directories.Add("LinArmData", ($directories.LinArmBinaries.toString() + "/data"))
$directories.Add("linX64Binaries", ($directories.ReleaseBinaries.toString() + "/" + $osNames.linX64.toString()))
$directories.Add("linX64Data", ($directories.linX64Binaries.toString() + "/data"))

switch($mode) {
    "clean"  {
        Write-Host("Invoked with Mode Clean, cleaning all.")
        if(Get-Item $directories.Debug.toString() -ne "") {
            Remove-Item $directories.Debug.toString() + "/*" -Recurse -Force
            Remove-Item $directories.Release.toString() + "/*" -Recurse -Force
        }
        else {
            Write-Host("Nothing to clean.")
        }
    }
    "build debug" {
        Write-Host("Invoked with mode Build.")

    }
    "clean debug" {
        Write-Host("Invoked with mode Clean Debug.")

    }
    "clean release" {
        Write-Host("Invoked with mode Clean Release")

    }
    "build release" {
        Write-Host("Invoked with mode Package Release.")

    }
}
