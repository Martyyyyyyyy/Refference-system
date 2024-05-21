package net.javacoursework.emsbackend.mapper;

import net.javacoursework.emsbackend.dto.componentsDto;
import net.javacoursework.emsbackend.dto.desktopDto;
import net.javacoursework.emsbackend.entity.components;
import net.javacoursework.emsbackend.entity.desktop;

public class componentsMapper {
    public static componentsDto mapTocomponentsDto(components component){
        return new componentsDto(
                component.getId(),
                component.getType(),
                component.getInventory_number(),
                component.getManufacturer(),
                component.getFree()
        );
    }

    public static components mapTocomponents(componentsDto componentDto){
        return new components(
                componentDto.getId(),
                componentDto.getType(),
                componentDto.getInventory_number(),
                componentDto.getManufacturer(),
                componentDto.getFree()
        );
    }

}
