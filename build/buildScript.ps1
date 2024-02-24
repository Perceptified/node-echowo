Param(
    $mode
)

$osNames = ("windows-x64", "linux-x64", "linux-arm64", "macos-arm64")
$directories = @{
    "ProjectRootDirectory" = $PSCommandPath + "/../../"
}
$directories.Add("Source", ($directories.ProjectRootDirectory + "/src"))
$directories.Add("Build", ($directories.ProjectRootDirectory + "/build"))
$directories.Add("Debug", ($directories.Build + "/Debug"))
$directories.Add("SourceData", ($directories.Source + "/data"))
$directories.Add("Release", ($directories.Build + "/Release"))
$directories.Add("ReleaseBinaries", ($directories.Release + "/binaries"))
$directories.Add("PlatformBinaryDirectories", @{})
foreach($item in $osNames) {
    $directories.PlatformBinaryDirectories.Add($item, ($directories.ReleaseBinaries + "/" + $item))
}
$directories.Add("PlatformDataDirectories", @{})
foreach($item in $osNames) {
    $directories.PlatformDataDirectories.Add(($item + "Data"), $directories.PlatformBinaryDirectories[$item] + "/" + "data")
}
Write-Host $directories.Keys $directories.Values
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
        npx tsc --outDir $directories.Release --removeComments
        foreach($item in $directories.PlatformDataDirectories.Keys) {
            Copy-Item -Path ($directories.SourceData + "/" + "config.json") -Destination $directories.PlatformDataDirectories[$item]
        }
        foreach($item in $osNames) {
            $inputFile = $directories.Release + "/" + "index.js"
            $outputFile = $directories.PlatformBinaryDirectories[$item] + "/" + "node-echowo"
            npx pkg $inputFile -t $item -o $outputFile
        }
        foreach($item in $directories.PlatformBinaryDirectories.Keys) {
            Copy-Item -Path ($directories.ProjectRootDirectory + "/" + "LICENSE") -Destination $directories.PlatformBinaryDirectories[$item]
        }
        foreach($item in $osNames) {
            Set-Location $directories.ReleaseBinaries
            $outFile = $item + ".zip"
            $inDirectory = $item + "/" + "*"
            zip $outFile $inDirectory
        }
    }
}
