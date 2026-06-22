echo "...[REMOVING-OLD-SDK-VERSION]"

if [ -d "../sdk" ]; then
    echo "...[REMOVING-OLD-SDK-VERSION]"
    rm -rf ../sdk
    echo "...[REMOVED-OLD-SDK-VERSION]"
else
    echo "...[NO-EXISTING-SDK-TO-REMOVE]"
fi

echo "...[REMOVED-OLD-SDK-VERSION]"



echo "...[CREATING-DIRECTORY-FOR-SDK]"
echo " "

mkdir ../sdk

cd ../sdk 

mkdir account

echo "...[GENERATE-SDKS-PROCESSING]"
echo " "

echo "...[GENERATE-ACCOUNT-SDK-PROCESSING]"
echo " "
openapi-generator generate -i https://infra-girlified.livestocx.xyz/docs/account-service-json -g typescript-axios -o ../sdk/account 

echo " "
echo "...[GENERATE-ACCOUNT-SDK-SUCCESS]"
echo " "

echo " "
echo "...[GENERATE-SDKS-SUCCESSFUL]"