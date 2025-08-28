export const getProduct = async(req, res) => {
    try {
        let { role } = res.user
        if (role !== "admin") {
            return res.status(403).json({ message: "Access denied" });
        }

        // const getProducts = await 
    } catch (error) {
        console.log("error in Add Product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}