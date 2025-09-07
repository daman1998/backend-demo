// import { Request, Response } from "express";
// import { Token } from "../../models/tokenModel/tokenModel";
// import crypto from "crypto";
// import bcrypt from "bcrypt";
// import { sendErrorResponse, sendSuccessWithoutResponse } from "../../utils/responseFun";
// import ResetPasswordEmail from "../../middleware/email/forgotPasswordEmail";
// import { OrganizationResponse } from "../../types/OrganizationModel";
// import { OrganizationModel } from "../../models/OrganizationModel/Organization";

// const ForgotPassword = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { email } = req.body;

//     // Check if the user with the provided email exists
//     const user:OrganizationResponse |null = await OrganizationModel.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: "User not found." });
//     }

//     // Remove any existing token for the user
//     let token = await Token.findOne({ userId: user._id });
//     if (token) {
//       await token.deleteOne();
//     }

//     // Generate a new reset token and hash it
//     const resetToken = crypto.randomBytes(32).toString("hex");
//     const hash = await bcrypt.hash(resetToken, Number(process.env.BCRYPT_SALT_ROUNDS) || 10);

//     // Save the new token with a timestamp for expiration management
//     await new Token({
//       userId: user._id,
//       token: hash,
//       createdAt: Date.now(),
//     }).save();

//     // Create a reset link and send it in the response (in production, you would email this link)
//     const resetLink = `${process.env.FRONTEND_BASEURL}/reset-password/${user._id}/${resetToken}`;
//     await ResetPasswordEmail(user, resetLink,res)
//     return sendSuccessWithoutResponse(res,"Reset Password Mail Sent to Your Email")
//   } catch (error) {
//     console.error("Error during password reset:", error);
//     return sendErrorResponse(res, 500, "An error occurred while processing the password reset request.")
//   }
// };

// export default ForgotPassword;
