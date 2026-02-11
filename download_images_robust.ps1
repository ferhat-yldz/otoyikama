$baseDir = "public\images\services"
$services = @{
    "normal-ic-dis-yikama" = "car,wash,soap"
    "vip-yikama" = "luxury,car,detailing"
    "full-detay-temizlik" = "car,interior,cleaning"
    "pasta-cila" = "car,polish,wax"
    "seramik-kaplama" = "ceramic,coating,car"
    "koltuk-temizleme" = "car,seat,clean"
    "motor-yikama" = "car,engine,detail"
    "jant-temizligi" = "car,wheel,rim"
    "far-temizligi" = "car,headlight,restoration"
    "klima-temizligi" = "car,air,conditioner"
    "arac-alti-yikama" = "car,undercarriage,wash"
    "cam-kirec-lekesi-temizligi" = "car,glass,clean"
    "zift-temizligi" = "car,tar,removal"
}

if (!(Test-Path -Path $baseDir)) { New-Item -ItemType Directory -Force -Path $baseDir | Out-Null }

foreach ($id in $services.Keys) {
    $dir = Join-Path $baseDir $id
    if (!(Test-Path -Path $dir)) { 
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
        Write-Host "Created directory: $id"
    }
    
    $keywords = $services[$id]
    # Add random query param to avoid caching
    $url = "https://loremflickr.com/800/600/$keywords/all?random=$((Get-Random))"
    $output = Join-Path $dir "cover.jpg"
    
    if (!(Test-Path -Path $output)) {
        Write-Host "Downloading for $id ($keywords)..."
        try {
            # Use curl.exe if available as it handles redirects better sometimes, or Invoke-WebRequest
            # Just sticking to Invoke-WebRequest for simplicity in PS
            Invoke-WebRequest -Uri $url -OutFile $output -UserAgent "Mozilla/5.0" -TimeoutSec 60
            Write-Host "  -> Success"
        } catch {
            Write-Error "  -> Failed: $_"
        }
        Start-Sleep -Seconds 1 # Be nice to the server
    } else {
        Write-Host "Skipping $id (already exists)"
    }
}
Write-Host "All downloads complete."
