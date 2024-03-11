package com.ceramics.user.RabbitMq;

import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SendMes {
    @Bean
    public DirectExchange mesExchange(){
        return new DirectExchange("mes_exchange",true,false);
    }
    @Bean
    public Queue mesFreezeQueue(){
        return QueueBuilder.durable("mes.freeze.queue").build();
    }
    @Bean
    public Queue mesUnFreezeQueue(){
        return QueueBuilder.durable("mes.unfreeze.queue").build();
    }
    @Bean
    public Binding mesfreezebind(DirectExchange mesExchange,Queue mesFreezeQueue){
        return BindingBuilder.bind(mesFreezeQueue).to(mesExchange).with("freeze");
    }
    @Bean
    public Binding mesunfreezebind(DirectExchange mesExchange,Queue mesUnFreezeQueue){
        return BindingBuilder.bind(mesUnFreezeQueue).to(mesExchange).with("unfreeze");
    }
}
