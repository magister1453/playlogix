package za.co.playlogix;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Watch {

    private @Id @GeneratedValue Long id;
    private String name;
    private float price;
    private int warranty;

    public Watch(){}

    public Watch(String name, float price, int warranty){
        this.name = name;
        this.price = price;
        this.warranty = warranty;
    }

}
