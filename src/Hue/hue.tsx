import {HUE_BRIDGE_IP, USERNAME, LIGHT_ID} from "./ENV";

export const getLightState = async () => {
    const res = await fetch(`https://${HUE_BRIDGE_IP}/api/${USERNAME}/lights/${LIGHT_ID}`);
    const data = await res.json();
    return {
        on: data.state.on,
        bri: data.state.bri,
    }
}

export const turnOn = async () => {
    const res = await fetch(`https://${HUE_BRIDGE_IP}/api/${USERNAME}/lights/${LIGHT_ID}/state`, {
        method: 'PUT',
        body: JSON.stringify({
            on: true,
            bri: 254,
        }),
    })
    const data = await res.json();
    if(data[0].success) {
        console.log('Light turned on');
    }
}

export const turnDark = async () => {
    const {on, bri} = await getLightState();
    if(!on) return;
    const newBri = bri - 100 > 0? bri - 100 : 0;

    const res = await fetch(`https://${HUE_BRIDGE_IP}/api/${USERNAME}/lights/${LIGHT_ID}/state`, {
        method: 'PUT',
        body: JSON.stringify({"bri":newBri}),
    })
    const data = await res.json();
    if(data[0].success) {
        console.log('Light turned dark');
    }
}

export const setLightness = async (lightness:number) => {
    const {on} = await getLightState();
    if(!on) return;
    const newBri = lightness > 0? lightness : 0;

    const res = await fetch(`https://${HUE_BRIDGE_IP}/api/${USERNAME}/lights/${LIGHT_ID}/state`, {
        method: 'PUT',
        body: JSON.stringify({"bri":newBri}),
    })
    const data = await res.json();
    if(data[0].success) {
        console.log('Light turned dark');
    }
}
