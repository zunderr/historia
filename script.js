document.addEventListener('DOMContentLoaded', () => {
    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener('click', function() {
            const atual = document.querySelector('.ativo');
            if (atual) {
                const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
                const proximoPasso = document.getElementById(proximoPassoId);

                if (proximoPasso) {
                    atual.classList.remove('ativo');
                    proximoPasso.classList.add('ativo');
                } else {
                    console.error(`Elemento com id "${proximoPassoId}" não encontrado.`);
                }
            } else {
                console.error('Nenhum passo atual com a classe "ativo" encontrado.');
            }
        });
    });
});