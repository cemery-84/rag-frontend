# rag-frontend

Simple AI Chat App Front End

# Docker commands

- `docker build -t rag-frontend:latest .` - Build the rag-frontend Docker container
- `docker build --no-cache -t rag-frontend:latest .` - Builds the Docker image locally forcing it to rebuild cleanly
- `docker run -p 8080:80 rag-frontend:latest` - Run the rag-frontend Docker container
- Adding the Docker container to the Azure Container Registry
    - `az login` - Log into Azure CLI
    - `az acr login --name aichatappcontainer` - Log into the Azure ACR
    - `docker tag rag-frontend:latest aichatappcontainer.azurecr.io/rag-frontend:v1` - Tag the local Docker image for ACR
    - `docker push aichatappcontainer.azurecr.io/rag-frontend:v1` - Push the image to ACR
    - `az acr repository list --name aichatappcontainer --output table` - Verify the image is in ACR

<!-- Then notes below applied to using AKS but was not working.

# Install NGINX Ingress Controller

1. `helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx`
1. `helm repo update`
1. Install the controller
    ```powershell
    helm install ingress-nginx ingress-nginx/ingress-nginx `
        --namespace ingress-nginx `
        --create-namespace `
        --set controller.nodeSelector."kubernetes\.io/os"=linux `
        --set defaultBackend.nodeSelector."kubernetes\.io/os"=linux
    ```
1. `kubectl get pods -n ingress-nginx` - Verify the ingress controller installed

# Get the public IP address

1. `kubectl get svc -n ingress-nginx` - Get the public (External) IP
1. `curl http://<your-public-ip>` - Confirm the IP works

# Apply All Kubernetes Manifests

- `kubectl apply -f kubernetes/` - Applies the manifests
- `kubectl get pods` - Verify pods is running
- `kubectl get svc` - Verify service is running
- `kubectl get ingress` - Verify ingress is running

# Create AKS Cluster
Create an AKS cluster using kubenet
```powershell
az aks create `
    --resource-group caseyemerydev-rg `
    --name ai-chat-kubenet `
    --location eastus2 `
    --node-count 1 `
    --node-vm-size Standard_B2s `
    --network-plugin kubenet `
    --generate-ssh-keys
```

# Scale AKS Cluster Nodes to 0 to Pause to reduce costs

- Scale to 0 to "Pause"
    ```powershell
    az aks nodepool scale `
        --resource-group caseyemerydev-rg `
        --cluster-name ai-chat-app-aks-cluster `
        --name agentpool `
        --node-count 0
    ```
- Scale to 1 to "Restart"
    ```powershell
    az aks nodepool scale `
        --resource-group caseyemerydev-rg `
        --cluster-name ai-chat-app-aks-cluster `
        --name agentpool `
        --node-count 1
    ```
-->
