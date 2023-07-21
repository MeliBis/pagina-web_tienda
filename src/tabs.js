export default class Tabs {
    constructor(idElemento){
        this.tabs= document.getElementById(idElemento);
        this.nav = this.tabs.querySelector('.tabs')
        
        //comprobamos que el elemento que clickeamos tenga la clase de tabs__link
        this.nav.addEventListener('click', (e)=>{
            if([...e.target.classList].includes('tabs__button')){
                
                //obtenemos la tab que queremos mostrar
                const tab= e.target.dataset.tab;

                //quitamlos la clase active de algunas otras tabs que la tengan
                if(this.tabs.querySelector('.tab__button--active')){
                    this.tabs.querySelector('.tab__button--active').classList.remove('tab__button--active')
                }
                if(this.tabs.querySelector('.tab--active')){
                    this.tabs.querySelector('.tab--active').classList.remove('tab--active')
                }

                this.tabs.querySelector(`#${tab}`).classList.add('tab--active')
               
                //agregamos la clase active al boton
                e.target.classList.add('tabs__button--active')
            }
        })
    }
}
