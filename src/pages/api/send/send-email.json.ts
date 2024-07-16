import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ request }) {
    try {
        const { name, email, message } = await request.json();

        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["brodevsofficial@gmail.com"],
            subject: `Nuevo mensaje de: ${name}`,
            html: `<div className="bg-slate-500">
                        <h1 className="text-4xl font-bold">${name}!</h1>
                        <p>${message}</p>
                        <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                        <a href="mailto:${email}">Responder</a>
                        </button>
                    </div>`,
        });
        console.log(data);
        return new Response(
            JSON.stringify({ success: true, data }),
            { status: 200 }
        );

    } catch (error) {
        console.error("Error sending email:", error);

        return new Response(
            JSON.stringify({ error: "Failed to send email" }),
            { status: 500 }
        );
    }
}
