"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOcurrenceController = void 0;
const DeleteOcurrenceService_1 = require("../../services/occurrence/DeleteOcurrenceService");
class DeleteOcurrenceController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params;
            const deleteOcurrence = new DeleteOcurrenceService_1.DeleteOcurrenceService();
            try {
                const ocurrenceDeleted = yield deleteOcurrence.execute(id);
                return res.json({ message: "registro excluido com sucesso" });
            }
            catch (err) {
                return res.json({ logError: "registro não localizado" });
            }
        });
    }
}
exports.DeleteOcurrenceController = DeleteOcurrenceController;
