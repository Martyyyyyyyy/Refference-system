package net.javacoursework.emsbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "components_in_computer")
public class componentsInComputer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "type")
    private String type;

    @Column(name = "inventory_number")
    private String inventory_number;

    @Column(name = "manufacturer")
    private String manufacturer;

    @Column(name = "single")
    private String single;

    @Column(name = "computer_name")
    private String computer_name;
}
