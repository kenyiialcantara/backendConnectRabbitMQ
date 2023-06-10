import { Router } from "express";
import {
  getUser,
  handleUserCredential,
  handleUserCredentialLogout,
} from "../controllers/users";

const router = Router();

router.get("/user", getUser);
router.post("/user", handleUserCredential);
router.post("/userlogout", handleUserCredentialLogout);

export default router;
