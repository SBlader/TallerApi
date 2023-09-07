import express from "express";
import {
    createInteraction,
    deleteInteraction,
    getAllInteractions,
    getOneInteraction,
    modifyInteraction,
} from "../controllers/InteractionController";

// Crear instancia del router ()
const router = express.Router();

// Lo utilizamos igual que antes app.post -> router.post
router.post("/command", createInteraction);
router.put("/command", modifyInteraction);
router.delete("/command",deleteInteraction);
router.get ("/command",getAllInteractions);
router.get('/command/:command', getOneInteraction);

// exportamos el router con el nombre commandRouter
export { router as interactionRouter };