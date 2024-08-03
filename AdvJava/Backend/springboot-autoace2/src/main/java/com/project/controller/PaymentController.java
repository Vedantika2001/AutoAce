package com.project.controller;



import java.util.Map;
import com.razorpay.*;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class PaymentController {
	
	@PostMapping("/Customer/createorder")
	@ResponseBody
	public String createOrder(@RequestBody Map<String,Object> data) throws RazorpayException
	{
		
		System.out.println(data);
		int amount=Integer.parseInt(data.get("amount").toString());
		var client=new RazorpayClient("rzp_test_pFTiTTXtjc8eQM","WlaukmGr6GBnKLi8Kz5d1w4A");
		JSONObject ob=new JSONObject();
		ob.put("amount",amount*100);
		ob.put("currency","INR");
		ob.put("receipt","txn_235425");
		//creating new order
		Order order=client.orders.create(ob);
		System.out.println(order);
		
		//if you want you can save it in database
		
		return order.toString() ;
		
	}

}
