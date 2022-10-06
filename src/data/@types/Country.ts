export interface Country {
  0: {
    nome: {
      abreviado: string;
    };

    area: {
      total: string;
    };

    governo: {
      capital: {
        nome: string;
      };
    };
    localizacao: {
      regiao: {
        nome: string;
      };
    };
    historico: string;

    linguas: {
      0: {
        id: number;
        nome: string;
      };
    };
  };
}
