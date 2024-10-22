# Import the Azure module
Import-Module Az

# Login to Azure
Connect-AzAccount

# Define variables
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageacct"
$skuName = "Standard_LRS"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $skuName `
                     -Kind StorageV2 `
                     -Tags @{ environment = "staging" }