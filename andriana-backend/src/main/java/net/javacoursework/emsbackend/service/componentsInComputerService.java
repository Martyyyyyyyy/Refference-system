package net.javacoursework.emsbackend.service;

import net.javacoursework.emsbackend.dto.componentsInComputerDto;

import java.util.List;

public interface componentsInComputerService {
    componentsInComputerDto createComputer(componentsInComputerDto computersDto);

    componentsInComputerDto getComputerById(Long computerId);

    List<componentsInComputerDto> getAllComputers();

    componentsInComputerDto updateComputer(Long computerId, componentsInComputerDto updatedComputer);

    void deleteComputer(Long computerId);
}
