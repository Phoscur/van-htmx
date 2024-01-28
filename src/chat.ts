import type { Router } from "express-ws"
import type ws from "ws"

import van, { Element, Props } from "mini-van-plate/van-plate"

function notifications(swap = true) {
    const { div } = van.tags;
    const attrs: Props = !swap ? {} : { "hx-swap-oob": "morphdom" };
    return div({id: "notifications", ...attrs}, !swap ? "" : "New message received");
}

function room(message: string|Element = "", swap = true) {
    const { div } = van.tags;
    const attrs: Props = !swap ? {} : { "hx-swap-oob": "beforeend" };
    return div({id: "chat_room", ...attrs}, message);
}

function form(value: string = "") {
    const { form, input } = van.tags;
    return form({id: "form", "ws-send": true, "hx-on:after-request": "this.reset()"}, 
        input({id: "chat", name: "chat_message", value}),
    )
}

export function setupChat(app: Router) {
    const sockets: ws[] = [];
    function broadcast(message: String, skipSelf?: ws) {
        for (const s of sockets) {
            if (s === skipSelf) continue
            s.send(message)
        }
    }
    app.ws("/ws", (ws, req) => {
        ws.on("message", (data: any) => {
            const msg = JSON.parse(data)
            const content = [
                notifications( true),
                room(van.tags.li(msg.chat_message)),
            ]
            const response = [
                // form(van, msg.chat_message),
                ...content,
            ]
            ws.send(response.map(e => e.render()).join(""))
            broadcast(content.map(e => e.render()).join(""), ws)
        });
        console.log("Socket established on", req.url);
        sockets.push(ws)
    })
}

export function renderChat() {
    const { div } = van.tags;
    return [
        div({"hx-ext": "ws", "ws-connect": "/ws"},
            notifications(false),
            room("", false),
            form(""),
        ),
    ]
}