package com.trade.controller;

import static org.hamcrest.CoreMatchers.sameInstance;

import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.andrewoma.dexx.collection.Map;

@RestController
@RequestMapping(value="/tradeservice")
@CrossOrigin
public class TradeServiceController {

	 @RequestMapping(method = RequestMethod.GET)
	 public void  getUser() {
		 	System.out.println("challlllaaaaaaaaaaaaa");
		 	
	       // return null;
	    }
	 
	 public static void main(String[] args) {
		java.util.Map<String,String> m = new HashMap();
		//m.put("a", "");
		m.put("b", "");
		m.put("a_1", "");
		System.out.println(m.keySet().stream().anyMatch(s -> s.contains("a")));
	}
	
}
