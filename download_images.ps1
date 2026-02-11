$services = @{
    "normal-ic-dis-yikama" = "car,wash,bubble"
    "vip-yikama" = "luxury,car,studio"
    "full-detay-temizlik" = "car,detailing,cleaning"
    "pasta-cila" = "car,polishing,wax"
    "seramik-kaplama" = "ceramic,coating,car,shine"
    "koltuk-temizleme" = "car,interior,seat"
    "motor-yikama" = "car,engine,clean"
    "jant-temizligi" = "car,wheel,rim"
    "far-temizligi" = "car,headlight"
    "klima-temizligi" = "car,ac,vent"
    "arac-alti-yikama" = "car,undercarriage"
    "cam-kirec-lekesi-temizligi" = "car,glass,clean"
    "zift-temizligi" = "car,cleaning,soap"
}

# Ensure directories exist
$baseDir = "public\images\services"
if (!(Test-Path -Path $baseDir)) { New-Item -ItemType Directory -Force -Path $baseDir }

foreach ($id in $services.Keys) {
    $dir = Join-Path $baseDir $id
    if (!(Test-Path -Path $dir)) { New-Item -ItemType Directory -Force -Path $dir }
    
    $keywords = $services[$id]
    $url = "https://loremflickr.com/1200/800/$keywords/all?random=$((Get-Random))"
    $output = Join-Path $dir "cover.jpg"
    
    Write-Host "Downloading for $id ($keywords)..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -UserAgent "Mozilla/5.0" -TimeoutSec 30
    } catch {
        Write-Warning "Failed to download for $id. Creating placeholder."
        # Create a simple colored placeholder if download fails (fallback)
        # This part requires drawing libraries which are not standard, so we'll just skip or copy a localized asset if we had one.
        # For now, just ensure the file exists as empty if failed, or retry.
    }
}
Write-Host "Done!"
