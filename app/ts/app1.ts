import {User} from '@app/models';

class App1 {
    constructor() {
        this.showGreeting();
    }

    showGreeting(): void {
        console.log('message is comming in 2 seconds...');
        setTimeout(() => {
            const user = new User('1', 'rodrigo1');
            console.log(`hello ${ user.name }`);
        }, 2000);
    }
}

new App1();