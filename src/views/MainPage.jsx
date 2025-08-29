import Header from '../componentes/Header';

function MainPage() {

   const pageTitle = "Página Inicial"


  return (
    <>    
    <div>
      <div>
      <Header pageTitle = {pageTitle}/>
  
      <p>Bem vindo!</p>
    

      </div>
    </div>
      
    </>
  );
}

export default MainPage;
