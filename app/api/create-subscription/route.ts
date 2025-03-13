import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: any, res: any) {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_SECRET_KEY;
    const plan_id = process.env.SUBSCRIPTION_PLAN_ID;

    // Check if environment variables are defined
    if (!key_id || !key_secret || !plan_id) {
        return NextResponse.json(
            { error: 'Missing required environment variables' },
            { status: 400 }
        );
    }

    let instance = new Razorpay({
        key_id: key_id,
        key_secret: key_secret,
    });

    const result = await instance.subscriptions.create({
        plan_id: plan_id,  // now safely using plan_id which is guaranteed to be a string
        customer_notify: 1,
        quantity: 1,
        total_count: 1,
        addons: [],
        notes: {
            key1: 'Note',
        },
    });

    return NextResponse.json(result);
}
