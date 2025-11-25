// ==========================================
// MAP.JS - Lógica do Mapa Interativo
// ==========================================

const mapData = {
    // Locais históricos com informações sobre povos africanos
    locations: [
        {
            name: "Salvador - Bahia",
            coords: [-12.9714, -38.5014],
            type: "traffic", // porto do tráfico
            ethnias: ["Yorubá", "Jeje", "Fon"],
            info: "<b>Salvador - BA</b><br>Principal porta de entrada dos povos africanos. Centro da cultura Yorubá no Brasil, especialmente forte no Candomblé.",
            cultural: "🕯️ Candomblé | 🥁 Tambor de Crioula | 🍲 Acarajé",
            facts: "Capital da Bahia e primeiro capital do Brasil. Patrimônio cultural da humanidade."
        },
        {
            name: "Rio de Janeiro",
            coords: [-22.9068, -43.1729],
            type: "traffic",
            ethnias: ["Banto", "Yorubá", "Bantu"],
            info: "<b>Rio de Janeiro - RJ</b><br>Segundo maior porto negreiro. Centro importante de resistência e cultura Bantu.",
            cultural: "💃 Samba | 🎭 Jongo | 🥁 Batuque",
            facts: "Herança Bantu muito forte. Muitas palavras do português vieram desta influência."
        },
        {
            name: "Recife - Pernambuco",
            coords: [-8.0476, -34.8770],
            type: "traffic",
            ethnias: ["Banto", "Yorubá"],
            info: "<b>Recife - PE</b><br>Importante centro comercial e porto do tráfico. Influência Bantu marcante.",
            cultural: "🎵 Frevo | 🎪 Maracatu | 🎸 Forró",
            facts: "Menestrância e resistência forte. Quilombos na região."
        },
        {
            name: "São Luís - Maranhão",
            coords: [-2.5351, -44.3055],
            type: "traffic",
            ethnias: ["Banto", "Yorubá", "Fon"],
            info: "<b>São Luís - MA</b><br>Porto importante no Atlântico Norte. Influência forte dos povos Bantu e Yorubá.",
            cultural: "🥁 Tambor de Crioula | 🎪 Bumba-meu-boi | 💃 Dança",
            facts: "Patrimônio Mundial da UNESCO. Arquitetura colonial com herança africana."
        },
        {
            name: "Maceió - Alagoas",
            coords: [-9.6498, -35.7353],
            type: "traffic",
            ethnias: ["Yorubá", "Bantu"],
            info: "<b>Maceió - AL</b><br>Centro importante de distribuição de escravizados. Influência Yorubá forte.",
            cultural: "🎭 Xangô | 🕯️ Religião Afro | 🥁 Ritmos",
            facts: "Centro espiritual importante. Muita resistência organizada."
        },
        {
            name: "Palmares - Alagoas",
            coords: [-9.3667, -36.0833],
            type: "resistance",
            ethnias: ["Banto", "Yorubá", "Múltiplas"],
            info: "<b>Serra da Barriga - Palmares</b><br>Maior quilombo da história do Brasil. Liderado por Zumbi dos Palmares (1695). Durou 67 anos de resistência.",
            cultural: "⚔️ Resistência | 🏘️ Comunidade | 🤝 Solidariedade",
            facts: "Símbolo máximo de resistência africana. Zumbi: 20 de novembro - Dia Nacional de Zumbi."
        },
        {
            name: "Ouro Preto - Minas Gerais",
            coords: [-20.3719, -43.5094],
            type: "cultural",
            ethnias: ["Banto", "Yorubá"],
            info: "<b>Ouro Preto - MG</b><br>Centro importante de mineração com grande população escravizada. Importante centro de Congadas.",
            cultural: "🎪 Congada | 🎵 Ritmos | 🏛️ Barroco",
            facts: "Cidade histórica com forte herança africana na arte e arquitetura."
        },
        {
            name: "Olinda - Pernambuco",
            coords: [-8.0083, -34.8566],
            type: "cultural",
            ethnias: ["Banto", "Yorubá"],
            info: "<b>Olinda - PE</b><br>Centro colonial com forte influência africana. Carnaval famoso com raízes nas culturas Bantu e Yorubá.",
            cultural: "🎭 Carnaval | 🎪 Maracatu | 🎨 Arte",
            facts: "Patrimônio da Humanidade. Resistência cultural forte."
        },
        {
            name: "Belém - Pará",
            coords: [-1.4558, -48.5039],
            type: "cultural",
            ethnias: ["Banto"],
            info: "<b>Belém - PA</b><br>Porto amazônico com forte presença Bantu. Influência na música e culinária.",
            cultural: "🥁 Tambor | 🎵 Música Popular | 🍲 Culinária",
            facts: "Influência Bantu na gastronomia. Palavras de origem africana no dialeto local."
        },
        {
            name: "Goiás Velho - Goiás",
            coords: [-15.9314, -50.1379],
            type: "cultural",
            ethnias: ["Yorubá", "Banto"],
            info: "<b>Goiás Velho - GO</b><br>Centro de mineração e cultura. Importante centro de Congadas e Cavalhadas.",
            cultural: "🎪 Congada | 🐎 Cavalhada | 🎵 Música",
            facts: "Patrimônio da Humanidade. Festas populares com herança africana."
        }
    ]
};

// Inicializa o mapa quando chamado
function initializeMap() {
    // Cria o mapa centrado no Brasil
    const map = L.map('map').setView([-15.7801, -47.9292], 5);

    // Adiciona o tile layer do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Cores para diferentes tipos de locais
    const typeColors = {
        traffic: '#FF6B6B',      // Vermelho - Portos do Tráfico
        cultural: '#4ECDC4',     // Verde-azul - Centros Culturais
        resistance: '#FFD93D'    // Amarelo - Locais de Resistência
    };

    // Adiciona os marcadores no mapa
    mapData.locations.forEach(location => {
        // Define o ícone baseado no tipo
        const markerColor = typeColors[location.type];
        
        // Cria um ícone personalizado
        const customIcon = L.divIcon({
            html: `<div style="
                width: 30px;
                height: 30px;
                background-color: ${markerColor};
                border-radius: 50%;
                border: 3px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 16px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            ">📍</div>`,
            className: 'custom-marker',
            iconSize: [30, 30],
            popupAnchor: [0, -15]
        });

        // Cria o marcador
        const marker = L.marker(location.coords, { icon: customIcon }).addTo(map);

        // Cria o conteúdo do popup
        const popupContent = `
            <div style="min-width: 250px; font-family: Arial, sans-serif;">
                <h3 style="margin: 0 0 10px 0; color: #2C3E50; border-bottom: 2px solid ${markerColor}; padding-bottom: 8px;">
                    ${location.name}
                </h3>
                <div style="font-size: 0.9rem; line-height: 1.5;">
                    <p><strong>Etnias:</strong> ${location.ethnias.join(', ')}</p>
                    <p>${location.info}</p>
                    <p><strong>Contribuições Culturais:</strong><br>${location.cultural}</p>
                    <p style="color: #666; font-size: 0.85rem;"><em>💡 ${location.facts}</em></p>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent, {
            maxWidth: 350,
            className: 'custom-popup'
        });

        // Adiciona evento de hover
        marker.on('mouseover', function() {
            this.openPopup();
        });
    });

    // Adiciona controles
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    return map;
}

// Exporta função se usando módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeMap };
}
