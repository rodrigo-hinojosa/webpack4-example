import {User} from '@app/models';

class App2 {
    constructor() {
        this.showGreeting();
    }

    showGreeting(): void {
        console.log('message is comming in 2 seconds...');
        setTimeout(() => {
            const user = new User('2', 'rodrigo2');
            console.log(`hello ${ user.name }`);
        }, 2000);
    }
}

new App2();