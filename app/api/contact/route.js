import nodemailer from 'nodemailer';

const EMAIL='info@dhirendrasoya.com'
const EMAIL_PASS='iicexzdtfxbxgwrc'

export async function POST(req){
    try{
        // parse request body
        const { name, email, phone, message } = await req.json();
        console.log(email, name, phone, message);
        // create transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth:{
                user: EMAIL,
                pass: EMAIL_PASS,
            },
        })

        // Email to user (auto-response)
        await transporter.sendMail({
            from: EMAIL,
            to: email,
            subject: 'Thanks for reaching out Dhirendra Soya!',
            html: `<p>Hi ${name},</p><p>Thanks for your message. We’ll get back within 24 hours.</p>`,
        });

        // email to admin for notification
        await transporter.sendMail({
            from: EMAIL,
            to: EMAIL, // your company email
            subject: `New contact from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        })
        return Response.json({success: true});
    } catch (error){
        console.error('Error sending email:', error);
        return Response.json({
            success: false,
            error: 'Failed to send email'
        }, {status: 500})
    }
}
