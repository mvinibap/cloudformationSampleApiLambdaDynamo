lambda_version="0.0.1"

npm install
zip -r my-api-$lambda_version.zip src node_modules cloudformation package.json
aws s3 cp my-api-$lambda_version.zip s3://lambda-zip-1234/
rm -f my-api-$lambda_version.zip
aws cloudformation deploy --template-file ./cloudformation/cloudformation.yml --stack-name cloudformationSample --parameter-overrides lambdaFunctionVersion=$lambda_version --capabilities CAPABILITY_IAM