Param(
    [array]$mode
)



# for($idx -lt $mode.Length; $idx = $idx + 1) {

# }

Get-Location

$osNames = @{
    "macOsArm64" = "macos-arm64";
    "winX64" = "windows-x64";
    "linArm64" = "linux-arm64";
    "linX64" = "linux-x64"; 
}
$directories = @{
    "projectRootDirectory" = "../";
    "source" = "./src";
    "Build" = "./build";
    "Debug" = "./build/Debug";
    "Release" = "./build/Release";
    "sourceData" = ($directories.source + "/data");
    "ReleaseBinaries" = ($directories.Release + "/binaries");
    "MacArm64Data" = ($directories.MacArm64Binaries + "/data");
    "WinX64Data" = ($directories.WinX64Binaries + "/data");
    "LinArmData" = ($directories.LinArmBinaries + "/data");
    "linX64Data" = ($directories.linX64Binaries + "/data");
}

function compile {

}


function build {
    Param(
        [array]$mode
    )
    Write-Host $mode.ToString()
    Set-Location $directories.projectRootDirectory
    function cleanDebug {
        Write-Host("Clearing: " + $directories.Debug)
        Remove-Item -Recurse -Force $directories.Debug
    }
    function cleanRelease {
        Write-Host("Clearing: " + $directories.Release)
        Remove-Item -Recurse -Force $directories.Release
    }
    function cleanAll {
        cleanDebug
        cleanRelease
    }
    function prepareReleaseDirectory {
        Write-Host("Preparing Release Directory: ")
        New-Item -Name $directories.Release
        New-Item -Name $directories.ReleaseBinaries
        New-Item -Name $directories.MacArm64Binaries
        New-Item -Name $directories.MacArm64Data
        New-Item -Name $directories.WinX64Binaries
        New-Item -Name $directories.WinX64Data
        New-Item -Name $directories.LinArmBinaries
        New-Item -Name $directories.linX64Data
    }
    function buildDebug {
        npx tsc --sourceMap true
    }
    function compileRelease {
        npx tsc --outDir $directories.Release
    }
    function runDebug {
        cleanDebug
        buildDebug
        node $directories.Debug + "/index.js"
    }
    function packageRelease {
        cleanRelease
        foreach($item in $osNames) {
            Copy-Item $directories.sourceData + "config.json" -Destination $directories.ReleaseBinaries + "/" + $osNames[$item]
            Copy-Item $directories.projectRootDirectory + "LICENSE" -Destination $directories.ReleaseBinaries + "/" + $osNames[$item] + "/LICENSE.TXT"
            npx pkg $directories.Release + "/index.js" -t $osNames[$item] -o $directories.ReleaseBinaries + "/" + $osNames[$item]
        }
    }
    switch($mode) {
        "clean"  {
            Write-Host("Invoked with Mode Clean, cleaning all.")
        }
        "build" {
            Write-Host("Invoked with mode Build.")
        }
        "clean debug" {
            Write-Host("Invoked with mode Clean Debug.")

        }
        "clean release" {
            Write-Host("Invoked with mode Clean Release")
        }
        "package release" {
            Write-Host("Invoked with mode Package Release.")
        }

    }
}

build($mode)