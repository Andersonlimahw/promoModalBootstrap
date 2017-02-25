 $(document).ready(function(){
             
           $("#ModalPromo").fadeIn('slow');
             
            //$('#openModal').trigger('click'); // dispara click no botão e abre o modal;
             
            
              
            var desconto = $('.desconto'); // variavel que pega a classe descondo ;
            var aceitar  =  $('.btn-aceitar'); // variavel que pega a classe do btn-aceitar ('I want !');
            var titulo = $('.modal-title');
            var i ;  // usado como contador no for para as animações abaixo ;
             
            aceitar.animate({right: '0px',  opacity: '0.5'}, 'slow');
            aceitar.animate({left: '0px', fontSize:'35px' , opacity: '1'}, '2000'); 
             
            desconto.animate({right: '0px',  opacity: '0.5'}, 'slow');
            desconto.animate({left: '-250px', fontSize:'35px' , opacity: '1'}, '2000');    
            
            
             for (i=0; i<3; i++) {
                 titulo.animate({fontSize: '22px'});
                 titulo.animate({fontSize: '24px'});
                 
             }           
             
           
           
             
        }); 
        
        function fechar() {
            $('#ModalPromo').hide();
        }