
    // Obtenha todos os botões "Excluir Perfil"
    const deleteButtons = document.querySelectorAll('.btn-danger');
    const count = 0;

    // Adicione um ouvinte de eventos de clique a cada botão "Excluir Perfil"
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Abra o modal de confirmação pelo ID
            const confirmModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
            confirmModal.show();

            // Adicione um ouvinte de eventos para o botão "Excluir" no modal
            const confirmDeleteButton = document.getElementById('confirmDelete');
            confirmDeleteButton.addEventListener('click', () => {
                // Encontre o elemento "accordion-item" pai do botão clicado
                const accordionItem = button.closest('.accordion-item');

                // Verifique se o elemento "accordion-item" foi encontrado
                if (accordionItem) {
                    // Remova o elemento "accordion-item" da tela

                    accordionItem.remove();

                }

                // Feche o modal de confirmação
                confirmModal.hide();
            });
        });
    });
