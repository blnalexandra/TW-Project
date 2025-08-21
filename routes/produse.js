import express from "express";
import { produse } from "../data/produse.js";

const router = express.Router();

router.get("/:id", (req, res) => {
    const productId = req.params.id;
    console.log(`=== PRODUCT ROUTE: ${productId} ===`);
    
    const produs = produse[productId];
    
    if (!produs) {
        console.log(`Product not found: ${productId}`);
        console.log("Available products:", Object.keys(produse));
        return res.status(404).render("pagini/eroare", {
            titlu: "Produs inexistent",
            text: `Produsul cu ID-ul "${productId}" nu a fost găsit`,
            imagine: "/resources/images/default_error.png"
        });
    }
    
    console.log(`Found product: ${produs.nume}`);
    
    try {
        res.render("pagini/produs", { produs });
    } catch (error) {
        console.error("Error rendering product page:", error);
        res.status(500).render("pagini/eroare", {
            titlu: "Eroare la afișarea produsului",
            text: "A apărut o eroare la încărcarea paginii produsului",
            imagine: "/resources/images/error.png"
        });
    }
});

export default router;