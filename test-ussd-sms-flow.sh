#!/bin/bash

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║            SMS SENDING TEST THROUGH USSD MENU                  ║"
echo "║                Testing with: +254791935128                     ║"
echo "╚════════════════════════════════════════════════════════════════╝"

# Note: Using phone number without +254 prefix as that's typical for USSD
PHONE="0791935128"
SESSION="sms-test-$$"

echo -e "\n📋 Test Flow:"
echo "1. Access main menu"
echo "2. Select option 1 (Search)"
echo "3. Search for 'rights'"
echo "4. Select first result"
echo "5. Select option 1 (Send SMS)"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "[STEP 1] Accessing menu..."
RESP1=$(curl -s -m 5 -X POST http://localhost:3000/ussd \
  -H "Content-Type: application/json" \
  -d "{\"phoneNumber\":\"+$PHONE\",\"sessionId\":\"$SESSION-1\",\"serviceCode\":\"000\",\"text\":\"\"}")
echo "$RESP1" | head -200

echo -e "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "[STEP 2] Selecting Search (option 1)..."
RESP2=$(curl -s -m 5 -X POST http://localhost:3000/ussd \
  -H "Content-Type: application/json" \
  -d "{\"phoneNumber\":\"+$PHONE\",\"sessionId\":\"$SESSION-1\",\"serviceCode\":\"000\",\"text\":\"1\"}")
echo "$RESP2" | head -200

echo -e "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "[STEP 3] Searching for 'rights'..."
RESP3=$(curl -s -m 5 -X POST http://localhost:3000/ussd \
  -H "Content-Type: application/json" \
  -d "{\"phoneNumber\":\"+$PHONE\",\"sessionId\":\"$SESSION-1\",\"serviceCode\":\"000\",\"text\":\"1*rights\"}")
echo "$RESP3" | head -300

echo -e "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "[STEP 4] Selecting first result (option 1)..."
RESP4=$(curl -s -m 5 -X POST http://localhost:3000/ussd \
  -H "Content-Type: application/json" \
  -d "{\"phoneNumber\":\"+$PHONE\",\"sessionId\":\"$SESSION-1\",\"serviceCode\":\"000\",\"text\":\"1*rights*1\"}")
echo "$RESP4" | head -300

echo -e "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "[STEP 5] ⭐ SENDING SMS (selecting option 1)..."
echo "This should trigger SMS to be sent to +$PHONE"
echo ""
RESP5=$(curl -s -m 8 -X POST http://localhost:3000/ussd \
  -H "Content-Type: application/json" \
  -d "{\"phoneNumber\":\"+$PHONE\",\"sessionId\":\"$SESSION-1\",\"serviceCode\":\"000\",\"text\":\"1*rights*1*1\"}")
echo "$RESP5"

echo -e "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ TEST COMPLETE"
echo ""
echo "📱 Check your SMS simulator at +254791935128 for the following:"
echo "   - Message from Africa's Talking"
echo "   - Article number and title"
echo "   - Official and simplified text"
echo ""
