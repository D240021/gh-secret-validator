# 🔐 Secret Validator Action

This GitHub Action validates that certain `secrets` are defined before continuing a workflow.

## 📥 Inputs

- `secrets`: Comma-separated list of the names of the required secrets.

## ✅ Example usage

```yaml
uses: D240021/gh-secret-validator@v1
with:
secrets: 'API_KEY,TOKEN,DEPLOY_SECRET'