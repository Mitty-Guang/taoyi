package com.ceramics.user.RabbitMq;

import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SendEncode {
    @Bean
    public DirectExchange setencodeExchange(){
        return new DirectExchange("user_get_encode",true,false);
    }
    @Bean
    public Queue encodequeue(){
        return QueueBuilder.durable("user.encode").build();
    }
    @Bean
    public Binding bind(DirectExchange setencodeExchange, Queue encodequeue){
        return BindingBuilder
                .bind(encodequeue)
                .to(setencodeExchange)
                .with("encode");
    }
}
