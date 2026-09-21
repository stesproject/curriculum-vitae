#!/bin/bash
set -e

# ==============================================================================
# CV PDF Export Script using Google Chrome Headless
# Usage: ./export-pdf.sh [en|de|it|all]
# Example: ./export-pdf.sh
# Example: ./export-pdf.sh de
# Example: ./export-pdf.sh all
# ==============================================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

LANG="${1:-en}"
mkdir -p output

if [ "$LANG" = "all" ]; then
  "$0" en
  "$0" de
  "$0" it
  exit 0
fi

# Prefer dist/ if available, otherwise root
if [ -f "$SCRIPT_DIR/dist/index.html" ]; then
  BASE_DIR="$SCRIPT_DIR/dist"
elif [ -f "$SCRIPT_DIR/index.html" ]; then
  BASE_DIR="$SCRIPT_DIR"
else
  echo "No build found in dist/. Building Astro..."
  npm run build
  BASE_DIR="$SCRIPT_DIR/dist"
fi

case "$LANG" in
  en)
    HTML_FILE="$BASE_DIR/index.html"
    OUTPUT_FILE="$SCRIPT_DIR/output/CV_Stefano_Mercadante.pdf"
    ;;
  de)
    HTML_FILE="$BASE_DIR/index-de.html"
    OUTPUT_FILE="$SCRIPT_DIR/output/CV_Stefano_Mercadante_de.pdf"
    ;;
  it)
    HTML_FILE="$BASE_DIR/index-it.html"
    OUTPUT_FILE="$SCRIPT_DIR/output/CV_Stefano_Mercadante_it.pdf"
    ;;
  *)
    echo "Error: Unknown language '$LANG'. Available: en, de, it, all"
    exit 1
    ;;
esac

if [ ! -f "$HTML_FILE" ]; then
  echo "Error: HTML file not found: $HTML_FILE"
  exit 1
fi

# Detect Google Chrome executable
CHROME_BIN=""
if [ -f "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
  CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
elif command -v google-chrome >/dev/null 2>&1; then
  CHROME_BIN="google-chrome"
elif command -v chromium >/dev/null 2>&1; then
  CHROME_BIN="chromium"
fi

if [ -z "$CHROME_BIN" ]; then
  echo "Error: Google Chrome or Chromium executable not found."
  echo "You can still open $HTML_FILE in any browser and use File > Print > Save as PDF."
  exit 1
fi

echo "Exporting CV [$LANG] to PDF..."
echo "Source: $HTML_FILE"
echo "Target: $OUTPUT_FILE"

"$CHROME_BIN" \
  --headless=new \
  --disable-gpu \
  --allow-file-access-from-files \
  --enable-local-file-accesses \
  --run-all-compositor-stages-before-draw \
  --no-pdf-header-footer \
  --print-to-pdf="$OUTPUT_FILE" \
  "file://$HTML_FILE"

if [ -f "$OUTPUT_FILE" ]; then
  echo "✅ PDF exported successfully: $OUTPUT_FILE"
else
  echo "❌ PDF generation failed."
  exit 1
fi
