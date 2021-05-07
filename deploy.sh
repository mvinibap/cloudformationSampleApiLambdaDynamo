npm install
mkdir temp
cp -r ./src temp 
cp -r ./node_modules temp 
cp -r ./cloudformation temp 
cp -r package.json temp 
zip -r my-api.zip temp
rm -rf temp
aws s3 cp my-api.zip s3://lambda-zip-1234/
aws cloudformation deploy --template-file ./cloudformation/cloudformation.yml --stack-name cloudformationSample --capabilities CAPABILITY_IAM