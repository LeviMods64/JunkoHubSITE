exports.handler = async function(event, context) {
  // Apenas aceita requisições POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  try {
    const apiKey = process.env.JUNKIE_API_KEY;
    const identifier = "1064309";
    
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Erro de configuração: JUNKIE_API_KEY ausente no servidor." })
      };
    }

    const junkieApiUrl = "https://jnkie.com/api/v1/generate";

    const response = await fetch(junkieApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
      },
      body: JSON.stringify({
        identifier: identifier
      })
    });

    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      if (contentType && contentType.includes("application/json")) {
        try {
          const errorData = await response.json();
          console.error("Erro JSON retornado pela Junkie:", errorData);
          return {
            statusCode: response.status,
            body: JSON.stringify({ error: errorData.message || "Falha ao comunicar com a API da Junkie." })
          };
        } catch (e) {
          console.error("Falha ao fazer parse do erro JSON:", e);
        }
      }
      const errorText = await response.text();
      console.error("Erro HTML/Texto retornado pela Junkie (Cloudflare block?):", errorText.substring(0, 500));
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "A requisição foi bloqueada pelo sistema de segurança (Cloudflare) da Junkie." })
      };
    }

    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Resposta de sucesso, mas não é JSON:", text.substring(0, 500));
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "A API da Junkie retornou uma página HTML em vez de JSON. Possível bloqueio do Cloudflare." })
      };
    }

    let data;
    try {
      data = await response.json();
    } catch (e) {
      console.error("Falha ao fazer parse do JSON de sucesso:", e);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "A API da Junkie retornou um JSON inválido." })
      };
    }
    
    const redirectUrl = data.url || data.link;

    if (!redirectUrl) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "A API da Junkie respondeu, mas não retornou uma URL válida." })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ url: redirectUrl })
    };
  } catch (error) {
    console.error("Erro interno:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro interno ao gerar a key." })
    };
  }
};
