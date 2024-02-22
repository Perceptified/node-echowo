Param(
    $mode
)

$osNames = @{
    "MacOsArm64" = "macos-arm64";
    "WinX64" = "windows-x64";
    "LinArm64" = "linux-arm64";
    "LinX64" = "linux-x64"; 
}
$directories = @{
    "ProjectRootDirectory" = $PSCommandPath + "/../../"
}
$directories.Add("Source", ($directories.ProjectRootDirectory + "/src"))
$directories.Add("Build", ($directories.ProjectRootDirectory + "/build"))
$directories.Add("Debug", ($directories.Build + "/Debug"))
$directories.Add("SourceData", ($directories.Source + "/data"))
$directories.Add("Release", ($directories.Build + "/Release"))
$directories.Add("ReleaseBinaries", ($directories.Release + "/binaries"))
$directories.Add("PlatformBinaryDirectories", @{
    "MacArm64Binaries" = ($directories.ReleaseBinaries + "/" + $osNames.MacOsArm64.toString());
    "WinX64Binaries" = ($directories.ReleaseBinaries + "/" + $osNames.WinX64.toString());
    "LinArmBinaries" = ($directories.ReleaseBinaries + "/" + $osNames.LinArm64.toString());
    "linX64Binaries" = ($directories.ReleaseBinaries + "/" + $osNames.LinX64.toString())
})
$directories.Add("PlatformDataDirectories", @{
    "MacArm64Data" = ($directories.PlatformBinaryDirectories.MacArm64Binaries + "/" + "data");
    "WinX64Data" = ($directories.PlatformBinaryDirectories.WinX64Binaries + "/" + "data");
    "LinArmData" = ($directories.PlatformBinaryDirectories.LinArmBinaries + "/" + "data");
    "linX64Data" = ($directories.PlatformBinaryDirectories.LinX64Binaries + "/" + "data")
})

function prepareDebugDirectory {
    Set-Location $directories.ProjectRootDirectory
    if(Test-Path $directories.Debug) {
        cleanDirectory -directory $directories.Debug
    }
    New-Item $directories.Debug -ItemType Directory
}
function prepareReleaseDirectory {
    Set-Location $directories.ProjectRootDirectory
    if(Test-Path $directories.Release) {
        cleanDirectory -directory $directories.Release
    }
    New-Item $directories.Release -ItemType Directory
    New-Item $directories.ReleaseBinaries -ItemType Directory
    foreach($item in $directories.PlatformBinaryDirectories.Keys) {
        Write-Host("Creating: " + $directories.PlatformBinaryDirectories[$item])
        New-Item $directories.PlatformBinaryDirectories[$item] -ItemType Directory
    }
    foreach($item in $directories.PlatformDataDirectories.Keys) {
        Write-Host("Creating: " + $directories.PlatformDataDirectories[$item])
        New-Item $directories.PlatformDataDirectories[$item] -ItemType Directory
    }
    
}

function cleanDirectory {
    Param(
        $directory
    )
    Write-Host(Get-ChildItem $directory)
    Remove-Item $directory -Recurse -Force
}

Write-Host("Called with: " + $mode)
switch ($mode) {
    "clean" {
        cleanDirectory -directory $directories.Release
        cleanDirectory -directory $directories.Debug
    }
    "clean release" {
        cleanDirectory -directory $directories.Release
    }
    "clean debug" {
        cleanDirectory -directory $directories.Debug
    }
    "build debug" {
        prepareDebugDirectory
        npx tsc --outDir $directories.Debug --sourceMap true
    }
    "build release" {
        prepareReleaseDirectory
    }
}
