import { env } from "process";

class Tgbot {
    private token: string | undefined = env.TELEGRAM_TOKEN;
    private chat: string | undefined = env.TELEGRAM_CHAT;

    constructor() {
        console.log(this.token);
        console.log(this.chat);
    }

    public sendNotification(name: string) {
        console.log(
            JSON.stringify({
                chat_id: this.chat,
                text: `Новая регистрация: ${name} зарегистрировался ${new Date().toString()}`
            })
        );

        fetch(`https://api.telegram.org/bot${this.token}/sendMessage`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: this.chat,
                text: `Новая регистрация: ${name} зарегистрировался ${new Date().toString()}`
            })
        })
            .then((r) => {
                console.log(r);
            })
            .catch((e) => {
                console.log(e);
            });
    }
}

export const bot = new Tgbot();
