import httpx
class Router:
  def __init__(self,api_key,base_url="https://api.moddepin.xyz"):self._k=api_key;self._u=base_url
  def route(self,spec):
    r=httpx.post(f"{self._u}/v1/route",json=spec,headers={"Authorization":f"Bearer {self._k}"},timeout=10);r.raise_for_status();return r.json()
