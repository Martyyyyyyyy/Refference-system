package net.javacoursework.emsbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class componentsDto {
    private Long id;
    private String type;
    private String inventory_number;
    private String manufacturer;
    private String free;
}
