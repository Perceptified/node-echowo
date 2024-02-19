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
    "projectRootDirectory" = $PSCommandPath + "/../../"
}
$directories.Add("source", ($directories.projectRootDirectory + "/src"))
$directories.Add("build", ($directories.projectRootDirectory + "/build"))
$directories.Add("debug", ($directories.build + "/Debug"))
$directories.Add("sourceData", ($directories.source + "/data"))
$directories.Add("release", ($directories.build + "/Release"))
$directories.Add("ReleaseBinaries", ($directories.Release + "/binaries"))
$directories.Add("MacArm64Binaries", ($directories.ReleaseBinaries + "/" + $osNames.macOsArm64.toString()))
$directories.Add("MacArm64Data", ($directories.MacArm64Binaries + "/data"))
$directories.Add("WinX64Binaries", ($directories.ReleaseBinaries + "/" + $osNames.winX64.toString()))
$directories.Add("WinX64Data", ($directories.WinX64Binaries + "/data"))
$directories.Add("LinArmBinaries", ($directories.ReleaseBinaries + "/" + $osNames.linArm64.toString()))
$directories.Add("LinArmData", ($directories.LinArmBinaries + "/data"))
$directories.Add("linX64Binaries", ($directories.ReleaseBinaries + "/" + $osNames.linX64.toString()))
$directories.Add("linX64Data", ($directories.linX64Binaries + "/data"))

function prepareDebugDirectory {
    New-Item $directories.debug -ItemType Directory
}
function prepareReleaseDirectory {

}

function cleanDirectory {
    Param(
        $directory
    )
    Write-Host(Get-ChildItem $directory)
    Remove-Item $directory -Recurse -Force
}

switch ($mode) {
    "clean" {
        Write-Host("Called with: " + $mode + " cleaning all.")
        cleanDirectory -directory $directories.Release
        cleanDirectory -directory $directories.Debug
    }
    "clean release" {
        Write-Host("Called with: " + $mode)
        cleanDirectory -directory $directories.Release
    }
    "clean debug" {
        Write-Host("Called with: " + $mode)
        cleanDirectory -directory $directories.Debug
    }
}
