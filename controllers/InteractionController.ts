import { Telegraf } from "telegraf";
import { Interaction } from "../models/Interaction";
import { Request, Response } from "express";

const bot = new Telegraf(process.env.TOKEN_BOT_TELEGRAM!);

const listInteraction: Interaction[] = [];

export const createInteraction = (req: Request, res: Response) => {
    const interaction = new Interaction(req.body);
    listInteraction.push(interaction);
    const { command, message } = interaction;
    bot.command(command, (ctx) => ctx.reply(message));
    return res.json({ ok: "success" });
};

export const modifyInteraction = (req: Request, res: Response) =>{
    const interaction = new Interaction(req.body);
    const { command, message } = interaction;
    const oldinteraction = listInteraction.find(((i) => i.command == command));
    if (oldinteraction){
        const index = listInteraction.indexOf(oldinteraction);
        listInteraction.splice(index,1,interaction);
        bot.command(command, (ctx) => ctx.reply(message));
        return res.json({ ok: "comando modificado" });
    }else{
        return res.json({ failure: "No existe el comando a modificar" });
    }
}
export const deleteInteraction = (req: Request, res: Response) => {
    const toDelete = new Interaction (req.body);
    const oldinteraction = listInteraction.find((i)=>i.command == toDelete.command);
    if (oldinteraction){
        const index = listInteraction.indexOf(oldinteraction);
        listInteraction.splice(index,1);
        bot.command(toDelete.command, (ctx)=>{});
        return res.json({ok: "Comando borrado"});
    }else{
        return res.json({failure: "El comando no existe"});
    }
}
export const getAllInteractions = (req: Request, res: Response) => {
    res.json({ ok: "success", data: listInteraction });
};

export const getOneInteraction = (req: Request, res: Response) => {
    // Al hacer uso de /:command ->
    // El valor de command se encuentra en req.params.command
    const { command } = req.params;
    // find recorre elemento por elemento hasta que la condición sea verdadera
    const commandFinded = listInteraction.find((i) => i.command === command);
    if (commandFinded){
        res.json({ ok: "comando encontrado", data: commandFinded });
    }else{
        res.json({ failure: "No existe el comando"});
    }
};

bot.launch();