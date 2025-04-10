export function validateCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/\D/g, '');
    
    if (cnpj.length !== 14) return false;
    
    // Validação dos dígitos verificadores
    // Implementação completa da validação de CNPJ aqui
    // ...
    
    return true;
  }