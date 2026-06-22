echo "...[REBUILDING-SDKS-PROCESSING]"
echo " "
echo " "
echo " "

echo "...[REBUILDING-ACCOUNT-SDK-PROCESSING]"
echo " "
openapi-generator generate -i https://infra-girlified.livestocx.xyz/docs/account-service-json -g typescript-axios -o ../sdk/account 

echo " "
echo "...[REBUILDING-ACCOUNT-SDK-SUCCESS]"
echo " "
echo " "
echo " "

echo " "
echo " "
echo " "
echo "...[REBUILDING-SDKS-SUCCESSFUL]"

echo " "
echo " "
echo " "
