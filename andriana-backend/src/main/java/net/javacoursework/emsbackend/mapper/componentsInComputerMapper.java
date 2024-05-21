package net.javacoursework.emsbackend.mapper;

import net.javacoursework.emsbackend.dto.componentsInComputerDto;
import net.javacoursework.emsbackend.entity.componentsInComputer;

public class componentsInComputerMapper {
    public static componentsInComputerDto mapTocomponentsInComputerDto(componentsInComputer computer){
        return new componentsInComputerDto(
                computer.getId(),
                computer.getType(),
                computer.getInventory_number(),
                computer.getManufacturer(),
                computer.getSingle(),
                computer.getComputer_name()
        );
    }

    public static componentsInComputer mapTocomponentsInComputer(componentsInComputerDto computerDto){
        return new componentsInComputer(
                computerDto.getId(),
                computerDto.getType(),
                computerDto.getInventory_number(),
                computerDto.getManufacturer(),
                computerDto.getSingle(),
                computerDto.getComputer_name()
        );
    }
}
