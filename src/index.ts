import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

interface Bank {
    bank_name: string;
    location: string;
    valuation: string;
    date?: string;
    child_banks?: Bank[];
}

app.get("/bank-data", (req, res) => {
    const bankData: Bank = {
        bank_name: "SouthState Bank, National Association",
        location: "Winter Haven, FL",
        valuation: "46B",
        child_banks: [
            {
                bank_name: "Independent Bank",
                location: "McKinney, TX",
                date: "01/01/2025",
                valuation: "18.5B",
                child_banks: [
                    {
                        bank_name: "Guaranty Bank and Trust Company",
                        location: "Denver, CO",
                        date: "01/01/2019",
                        valuation: "3.7B",
                        child_banks: [
                            {
                                bank_name: "Castle Rock Bank",
                                location: "Castle Rock, CO",
                                date: "10/28/2017",
                                valuation: "145M",
                            },
                            {
                                bank_name: "The Home State Bank",
                                location: "Loveland, CO",
                                date: "09/09/2016",
                                valuation: "884.4M",
                                child_banks: [
                                    {
                                        bank_name: "American Bank",
                                        location: "Loveland, CO",
                                        date: "10/12/2002",
                                        valuation: "133.7M",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    };

    res.status(200).json({ success: true, code: 200, data: bankData });
});

app.listen(3000, () => console.log("App is running at 3000"));
